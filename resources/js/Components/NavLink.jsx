import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "transition duration-150 ease-in-out focus:outline-none" +
                (active
                    ? "text-bodydark1"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700") +
                className
            }
        >
            {children}
        </Link>
    );
}