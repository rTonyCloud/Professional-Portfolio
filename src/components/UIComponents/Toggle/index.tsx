import * as styles from './toggle.styles'
import React, { useState } from 'react'
interface ToggleProps {
    labels: [string, string]
    defaultLabel: string
    onChange: (label: string) => void
}

const Toggle: React.FC<ToggleProps> = (props: ToggleProps): JSX.Element => {
    const { labels, defaultLabel, onChange } = props
    const [selectedLabel, setSelectedLabel] = useState(defaultLabel)

    const handleToggle = (labels: string) => {
        setSelectedLabel(labels)
        onChange(labels)
    }

    return (
        <styles.ButtonLayout>
            <styles.Button>
                <styles.ToggleButton
                    active={selectedLabel === labels[0]}
                    onClick={() => handleToggle(labels[0] || labels[1])}
                >
                    {labels[0]}
                </styles.ToggleButton>
                <styles.ToggleButton
                    active={selectedLabel == labels[1]}
                    onClick={() => handleToggle(labels[1] || labels[0])}
                >
                    {labels[1]}
                </styles.ToggleButton>
            </styles.Button>
        </styles.ButtonLayout>
    )
}
export default Toggle
