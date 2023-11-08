export default function CardItemList ({ data, children }: {
  data?: { target: string }
  children: React.ReactNode }) {
  if (data === undefined) {
    return (
        <div className="rounded-2xl p-4 border text-gray-500">
            <div className="rounded-2xl p-5 flex gap-4 items-center border shadow-[0_0_20px_rgba(0,0,0,0.05)]">
                {children}
            </div>
        </div>
    )
  } else {
    return (
        <a href={data.target} target="_blank" rel="noopener noreferrer" className="rounded-2xl p-4 border text-gray-500" >
            <div className="rounded-2xl p-5 flex gap-4 items-center border shadow-[0_0_20px_rgba(0,0,0,0.05)]">
                {children}
            </div>
        </a>
    )
  }
}
