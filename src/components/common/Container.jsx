
const Container = ({children, className}) => {
  return (
    <div className={`max-w-400 m-auto sm:px-25 ${className}`}>{children}</div>
  )
}

export default Container