import "./Downlines.css";

const Downlines = () => {
  return (
    <>
        <section className="downlines">
            <h4>Here are Your Downline and their status</h4>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Status</th>
                        <th scope="col">Package</th>
                        <th scope="col">Expected ROI</th>
                        <th scope="col">Referral Bonus</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Akorede Olaide</td>
                        <td className="status"><div className="active"></div>Active</td>
                        <td>Gold Package</td>
                        <td>$500</td>
                        <td>$50</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Akorede Olaide</td>
                        <td className="status"><span className="inactive"></span>Inactive</td>
                        <td>Gold Package</td>
                        <td>$500</td>
                        <td>$50</td>
                        
                    </tr>
                </tbody>
            </table>
        </section>
    </>
  )
}

export default Downlines