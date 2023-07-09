import { FC } from 'react'
import { Box, TextField, Button, IconButton } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import SectionHeader from '@shared/SectionTitle'

import styles from './styles.module.scss'

interface IProps {
  color?: string
  sizes: string[]
  smSizes: string[]
  addSize: (color?: string) => void
  handleSizeChange: (sizes: string[], smSizes: string[], color?: string) => void
}

const NewProductSizes: FC<IProps> = ({
  color,
  sizes,
  smSizes,
  addSize,
  handleSizeChange,
}) => {
  const handleChange = (sizeType: string, index: number, value: string) => {
    if (sizeType === 'sizes') {
      handleSizeChange(
        sizes.map((size, ind) => (ind === index ? value : size)),
        smSizes,
        color
      )
    } else {
      handleSizeChange(
        sizes,
        smSizes.map((size, ind) => (ind === index ? value : size)),
        color
      )
    }
  }

  const removeSize = (index: number) => {
    handleSizeChange(
      sizes.filter((_, i) => i !== index),
      smSizes.filter((_, i) => i !== index),
      color
    )
  }

  return (
    <>
      <SectionHeader title="Չափսերը" />
      <Box className={styles.sizes}>
        {sizes.map((size, index) => (
          <Box key={index} className={styles.sizeContainer}>
            <TextField
              label="Չափսը"
              type="number"
              value={sizes[index]}
              onChange={(evt) => handleChange('sizes', index, evt.target.value)}
            />
            <TextField
              label="Չափսը (սմ․)"
              type="number"
              value={smSizes[index]}
              onChange={(evt) =>
                handleChange('smSizes', index, evt.target.value)
              }
            />
            <IconButton onClick={() => removeSize(index)}>
              <DeleteOutlineOutlinedIcon sx={{ color: 'red' }} />
            </IconButton>
          </Box>
        ))}
        <Button className={styles.addBtn} onClick={() => addSize(color)}>
          Ավելացնել չափս
        </Button>
      </Box>
    </>
  )
}

export default NewProductSizes
