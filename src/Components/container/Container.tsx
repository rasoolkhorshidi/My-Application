interface IContainer{
    children?: React.ReactNode;
}

function Container({children}: IContainer) {
  return (
    <div className="flex items-center justify-between h-full px-4">
        {children}
    </div>
  )
}

export default Container