
const Container = ({children, className}) => {
  return (
    <div className={`max-w-400 mx-auto sm:px-25 ${className}`}>{children}</div>
  )
}

export default Container