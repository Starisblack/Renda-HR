import "./PriceTableCard.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { priceTableData } from "../PriceTableData";

const PriceTableCard = () => {
  return (
    <table className="table-spacing">
      <thead>
        <tr className="table-price-category">
          <th></th>
          <th>Inspire</th>
          <th>Engage</th>
          <th>Boost</th>
        </tr>
      </thead>

      {priceTableData?.map((table) => {
        return (
          <tbody key={table.tableTitle}>
            <tr key={table.tableTitle}>
              <th className={table.tableTitle + " table-title"}>{table.tableTitle}</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>

            {table.tableContents.map((content) => {
              return (
                <tr key={content.title}>
                  <td className="row-title">{content.title}</td>

                  {content.details.map((detail) => {
                    return (
                      <td key={detail + Math.random()}>
                        {detail === "yes" ? (
                          <CheckCircleIcon className="check-icon" />
                        ) : (
                          <HighlightOffIcon className="err-icon" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        );
      })}
    </table>
  );
};

export default PriceTableCard;
