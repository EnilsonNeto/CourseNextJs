export default function ProductDetailLayout ({ children }: { children: React.ReactNode }) {
    return(
        <>
            <p style={{backgroundColor: "green"}}>Especificações</p>
            {children}
        </>
    )
}