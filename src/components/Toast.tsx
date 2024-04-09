import Snackbar from "@mui/material/Snackbar";

type ToastProp = {
  isOpen: boolean;
  onCloseToast: React.Dispatch<React.SetStateAction<boolean>>;
  message: "copied" | "reset";
};

function Toast({ isOpen, onCloseToast, message }: ToastProp) {
  const handleCloseToast = () => {
    onCloseToast(false);
  };
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={1000}
      message={message === "copied" ? "복사되었습니다." : "리셋되었습니다."}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      onClose={handleCloseToast}
      ContentProps={{
        sx: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
      }}
    />
  );
}

export default Toast;
