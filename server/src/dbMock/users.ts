import EnumCrncyCode from '../enums/eCrncyCode'
import User from '../components/user'

const USERS: Array<User> = [
  new User(22.58, 56.98, EnumCrncyCode.EUR),
  new User(5.98, 1.56, EnumCrncyCode.EUR),
  new User(10.35, 5.0, EnumCrncyCode.EUR),
  new User(1235.69, 3.98, EnumCrncyCode.EUR),
  new User(598.01, 125.6, EnumCrncyCode.EUR)
]

export default USERS
