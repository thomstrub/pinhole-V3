import React from "react";
import constants from "../../constants/constants";
import * as styles from "./tabs.module.css";

const tabs = [
    { id: constants.tabs.basic, label: "Basic" },
    { id: constants.tabs.advanced, label: "Advanced" }
];

export default function Tabs({ active, onChange }) {
    return (
        <div role="tablist" style={{ borderBottom: "1px solid #DBE1E5" }}>
            <div className={styles.group}>
                {tabs.map(tab => {
                    const isActive = tab.id === active;
                    return (
                        <button
                            key={tab.id}
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => onChange(tab.id)}
                            className={isActive ? `${styles.tab} ${styles.active}` : styles.tab}
                        >
                            {tab.label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
