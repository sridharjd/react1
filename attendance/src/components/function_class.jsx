
export const Table4 = ({stdid}) => {
  return (
    <div>
        <table className="TableCSS">
            <thead>
                <th>Name</th>
                <th>ID</th>
            </thead>
            <tbody>
                {stdid.map((stdid, index) =>(
                    <tr key={index}>
                        <td>{stdid.name}</td>
                        <td>{stdid.id}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

