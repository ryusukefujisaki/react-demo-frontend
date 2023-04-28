export const formatDate = function (dateString: string): string {
  const date = new Date(dateString)
  const _ = {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    H: date.getHours(),
    m: date.getMinutes()
  }
  return `${_["y"]}年${_["M"]}月${_["d"]}日 ${_["H"]}時${_["m"]}分`
}
