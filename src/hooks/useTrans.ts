import { useRouter } from 'next/router'
import { useState } from 'react'
import en from '../../public/lang/en.js'
import vi from '../../public/lang/vi.js'
// import { LOCALE_ENUM } from '@/utils/constants.js'

export const LOCALE_ENUM = {
    VN: 'vi',
    EN: 'en'
  }

const useTrans = () => {
    const [locale, setLocale] = useState(LOCALE_ENUM.VN)

    const t = locale === LOCALE_ENUM?.VN ? vi : en
    console.log('locale', locale)
    return { t, locale, setLocale }
}

export default useTrans
