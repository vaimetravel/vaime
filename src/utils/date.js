import moment from 'moment'

export const calcDate = (startDate, endDate, withYear = true) => startDate && endDate ?
  `${moment(startDate).format('DD.MM')}-${moment(endDate).format('DD.MM')}${withYear ? '.' : ''}${withYear ? moment(startDate).format('YYYY') : ''}`
  : ''

export const countDays = (startDate, endDate) => startDate && endDate ? moment(endDate).diff(moment(startDate), 'days') : 0

export const calcYear = (date) => date ? moment(date).format('YYYY') : ''