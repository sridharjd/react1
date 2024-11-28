
export const Table4 = ({students}) => {
  return (
    <div>
        <table className="TableCSS">
            <thead>
                <th>Name</th>
                <th>ID</th>
            </thead>
            <tbody>
                {students.map((students, index) =>(
                    <tr key={index}>
                        <td>{students.name}</td>
                        <td>{students.id}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
};
