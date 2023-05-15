import React, { useEffect, useState } from 'react'
import HeaderTyper from '../../components/HeaderTyper'
import style from './styles.module.css'
import { shuffle } from '../../utils'

const index = () => {
    const [toTypeWords] = useState(
        shuffle([
          'Email:wanghanlinlin@126.com',
          'QQ:894606483',
          'WeiChat:wang894606483',
          'AuroraPiexl',
        ])
      );

    return (
        <div>
            <HeaderTyper
                className={'Text'}
                words={toTypeWords}
                delay={5000}
                defaultText={toTypeWords[0] || 'Aurora'}
            />
        </div>
    )
}

export default index