import { FC } from 'react'
import { Box } from '@mui/material'
import SectionHeader from '@shared/SectionTitle'

import styles from './styles.module.scss'

interface IProps {}

const CommonStatistics: FC<IProps> = () => {
  return (
    <Box className={styles.statistics}>
      <SectionHeader title="Ընդհանուր Ստատիստիկա" />
    </Box>
  )
}

export default CommonStatistics
