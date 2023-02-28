import React from "react"


const MyEducationBlock = () => {

    const [active, setActive] = React.useState('Education')

    const handleToggle = (labels: string) => {
        setActive(labels)
    }

    return { active, handleToggle}

}

export default MyEducationBlock