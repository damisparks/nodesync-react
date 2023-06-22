import { useEffect, useState } from 'react'
import { parseISO, differenceInYears, format } from 'date-fns'

/**
 * @name useBirthdayInfo
 * @param birthdate
 * @description This hook is used to calculate the age, birth month, birth day and birth day number of a user
 */
export const useBirthdayInfo = (birthdate: string | null) => {
  const [age, setAge] = useState<number | null>(null)
  const [birthMonth, setBirthMonth] = useState<string | null>(null)
  const [birthDay, setBirthDay] = useState<string | null>(null)
  const [birthDayNumber, setBirthDayNumber] = useState<number | null>(null)

  useEffect(() => {
    if (birthdate) {
      const parsedBirthdate = parseISO(birthdate)
      const calculatedAge = differenceInYears(new Date(), parsedBirthdate)
      const month = format(parsedBirthdate, 'MMMM')
      const day = format(parsedBirthdate, 'eeee')
      const dayNumber = format(parsedBirthdate, 'd')
      setBirthDayNumber(parseInt(dayNumber))
      setAge(calculatedAge)
      setBirthMonth(month)
      setBirthDay(day)
    } else {
      setAge(null)
      setBirthMonth(null)
      setBirthDay(null)
    }
  }, [birthdate])

  return {
    age,
    birthMonth,
    birthDay,
    birthDayNumber,
  }
}
