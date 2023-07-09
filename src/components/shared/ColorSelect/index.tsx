import { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import styles from './styles.module.scss'

interface IProps {
  multiple?: boolean
  color: string[] | string
  onChange: (color: string[] | string) => void
}

const ColorSelect: FC<IProps> = ({ color, multiple, onChange }) => {
  return (
    <FormControl className={styles.form}>
      <InputLabel id="color-label">Գույները</InputLabel>
      <Select
        labelId="color-label"
        label="Գույները"
        className={styles.select}
        value={color}
        multiple={multiple}
        onChange={(evt) => onChange(evt.target.value)}
        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
      >
        <MenuItem value="Սև">Սև</MenuItem>
        <MenuItem value="Սպիտակ">Սպիտակ</MenuItem>
        <MenuItem value="Կանաչ">Կանաչ</MenuItem>
        <MenuItem value="Շագանակագույն">Շականակագույն</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ColorSelect
