import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import styles from './toggleGroup.module.css';
import { TextAlignCenter, TextAlignLeft, TextAlignRight } from 'phosphor-react';

export const Toggle: React.FC<{ariaLabel: string, defaultValue: string, type: string}> = () => {
    return (
    <ToggleGroup.Root
        className={styles.ToggleGroup}
        type="single"
        defaultValue="center"
        aria-label="Text alignment"
    >
        <ToggleGroup.Item className={styles.ToggleGroupItem} value="left" aria-label="Left aligned">
        Hourly
        </ToggleGroup.Item>
        <ToggleGroup.Item className={styles.ToggleGroupItem} value="center" aria-label="Center aligned">
        Daily
        </ToggleGroup.Item>
        <ToggleGroup.Item className={styles.ToggleGroupItem} value="right" aria-label="Right aligned">
        Weekly
        </ToggleGroup.Item>
        <ToggleGroup.Item className={styles.ToggleGroupItem} value="monthly" aria-label="Right aligned">
        Monthly
        </ToggleGroup.Item>
    </ToggleGroup.Root>
    )
};