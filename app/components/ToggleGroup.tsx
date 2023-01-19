import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import styles from './toggleGroup.module.css';
import { TextAlignCenter, TextAlignLeft, TextAlignRight } from 'phosphor-react';

export const ChartIntervalToggle: React.FC<{ariaLabel: string, defaultValue: string, type: string, onClick: React.MouseEventHandler<HTMLButtonElement>}> = ({ariaLabel, defaultValue, type, onClick}) => {
    return (
    <ToggleGroup.Root
        className={styles.ToggleGroup}
        type="single"
        defaultValue={defaultValue}
        aria-label={ariaLabel}
    >
        <ToggleGroup.Item className={styles.ToggleGroupItem} id="HOUR" value="HOUR" aria-label="hourly" onClick={onClick}>
            Hourly
        </ToggleGroup.Item>
        <ToggleGroup.Item className={styles.ToggleGroupItem} id="DAY" value="DAY" aria-label="daily" onClick={onClick}>
            Daily
        </ToggleGroup.Item>
        <ToggleGroup.Item className={styles.ToggleGroupItem} id="WEEK" value="WEEK" aria-label="weekly" onClick={onClick}>
            Weekly
        </ToggleGroup.Item>
        <ToggleGroup.Item className={styles.ToggleGroupItem} id="MONTH" value="MONTH" aria-label="monthly" onClick={onClick}>
            Monthly
        </ToggleGroup.Item>
    </ToggleGroup.Root>
    )
};