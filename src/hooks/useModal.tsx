import React from "react"


export default function useModal() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return {
        isOpen,
        toggle,
    }
}