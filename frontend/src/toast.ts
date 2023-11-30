import { toast } from '@zerodevx/svelte-toast';

export function ErrorToast(msg: string) {
    toast.push(msg, {
        theme: {
            '--toastColor': 'mintcream',
            '--toastBackground': 'rgba(210, 21, 21, 0.9)',
            '--toastBarBackground': '#A93939'
        }
    });
}

export function SuccessToast(msg: string) {
    toast.push(msg, {
        theme: {
            '--toastColor': 'mintcream',
            '--toastBackground': '#14854f',
            '--toastBarBackground': '#10653c'
        }
    });
}