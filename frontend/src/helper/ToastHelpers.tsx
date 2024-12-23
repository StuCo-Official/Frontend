import toast from "react-hot-toast";

export const warningToast = (message: string) => {
    toast(message, {
        icon: '⚠️'
    });
};