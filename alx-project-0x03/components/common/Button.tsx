type ButtonProps = {
    label: string;
    onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
    return (
        <button onClick={onClick}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
            {label}
        </button>
    );
}