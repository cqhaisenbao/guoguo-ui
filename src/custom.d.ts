type MessageType = 'success' | 'error' | 'warning'

interface GlobalErrorProps {
    status: boolean;
    message?: string;
}

type TagType = 'input' | 'textarea'

type UploadStatus = 'ready' | 'loading' | 'success' | 'error'
