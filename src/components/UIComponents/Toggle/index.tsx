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


    return (
        <styles.ButtonLayout>
            <styles.Button>
                <styles.ToggleButton>
                    {labels[0]}
                </styles.ToggleButton>
                <styles.ToggleButton>
                    {labels[1]}
                </styles.ToggleButton>
            </styles.Button>
        </styles.ButtonLayout>
    )
}
export default Toggle