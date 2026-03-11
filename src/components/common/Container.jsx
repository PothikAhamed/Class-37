
const Container = ({children, className}) => {
  return (
    <div className={`max-w-330 m-auto sm:px-[100px] ${className}`}>{children}</div>
  )
}

export default Container