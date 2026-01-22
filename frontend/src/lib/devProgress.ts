import { toast } from "sonner"

export const handlePendingWork = () => {
  toast.error("Still working on it...");
}

export const handleExtensionNotDeployed = () => {
  toast.error("Chrome requires a registration fee of $5 to deploy the extension.");
}