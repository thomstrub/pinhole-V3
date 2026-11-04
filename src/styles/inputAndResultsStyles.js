const labelStyles = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    height: "20px",
    marginBottom: "8px",
    color: "#384656",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "20px"
}

const inputStyles = {
    display: "block",
    width: "100%",
    height: "60px",
    boxSizing: "border-box",
    padding: "0 12px",
    color: "#384656",
    fontFamily: "Karla",
    fontSize: "32px",
    lineHeight: "32px",
    background: "#FFFFFF",
    border: "1px solid #DBE1E5",
    borderRadius: "6px"
}

const resultStyles = {
    ...inputStyles,
    background: "#EAECEF"
}

// label, field and optional unit toggle; the toggle sits level with the field
const rowStyles = {
    display: "flex",
    alignItems: "flex-end",
    gap: "20px",
    marginBottom: "24px"
}

const fieldStyles = {
    flex: "1 1 0",
    minWidth: 0
}

export { labelStyles, inputStyles, resultStyles, rowStyles, fieldStyles }
