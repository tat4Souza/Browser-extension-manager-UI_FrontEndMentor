import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import classNames from "classnames";

function DeleteModal({ name, darkTheme, onClose, onConfirm }) {
  return (
    <div
      className={classNames("modal__background", {
        "modal__background--dark": darkTheme,
      })}
    >
      <AnimatePresence>
        <motion.div
          className={classNames("modal__container", {
            "modal__container--dark": darkTheme,
          })}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <div
            className={classNames("modal__header", {
              "modal__header--dark": darkTheme,
            })}
          >
            <h3>Confirm Remotion</h3>
            <i className="pi pi-times" onClick={onClose}></i>
          </div>
          <p
            className={classNames("modal__message", {
              "modal__message--dark": darkTheme,
            })}
          >
            Are you sure you want to remove {name} extension?{" "}
          </p>
          <div className="modal__footer">
            <Button
              darkTheme={darkTheme}
              className="button--modal"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              darkTheme={darkTheme}
              className="button--modal button--modal-confirm"
              onClick={onConfirm}
            >
              Remove
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default DeleteModal;
