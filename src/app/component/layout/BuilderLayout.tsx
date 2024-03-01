interface IProps {
    children: React.ReactNode;
}

const BuilderLayout = ({children}: IProps) => {
    return <div className="flex justify-between items-center w-full">
        {children}
    </div>
}

export default BuilderLayout