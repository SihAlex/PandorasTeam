interface Props {
    style?: object;
    border?: string;
    color?: string;
    children?: React.ReactNode;
    height?: string;
    onClick: () => void;
    radius?: string;
    width?: string;
}

const Button: React.FC<Props> = ({
    style,
    border = 'none',
    color,
    children,
    height,
    onClick,
    radius,
    width
}) => {
    return (
        <button
            disabled={false}
            onClick={onClick}
            style={{
                ...style,
                backgroundColor: color,
                border,
                borderRadius: radius,
                height,
                width
            }}
        >
            {children}
        </button>
    );
};

export default Button;
