import "./Column.css";

const Column = ({ fromDatePlaceholder, oct2023, oct20231, oct20232 }) => {
  return (
    <div className="column">
      <div className="header-cell">
        <input
          className="from-date"
          placeholder={fromDatePlaceholder}
          type="text"
        />
      </div>
      <div className="item-cell">
        <div className="oct-2023">{oct2023}</div>
      </div>
      <div className="item-cell1">
        <div className="oct-20231">{oct20231}</div>
      </div>
      <div className="item-cell2">
        <div className="oct-20232">05 Oct 2023</div>
      </div>
      <div className="item-cell3">
        <div className="oct-20233">05 Oct 2023</div>
      </div>
      <div className="item-cell4">
        <div className="oct-20234">05 Oct 2023</div>
      </div>
      <div className="item-cell5">
        <div className="oct-20235">05 Oct 2023</div>
      </div>
      <div className="item-cell6">
        <div className="oct-20236">{oct20232}</div>
      </div>
      <div className="item-cell7">
        <div className="oct-20237">05 Oct 2023</div>
      </div>
      <div className="item-cell8">
        <div className="oct-20238">05 Oct 2023</div>
      </div>
      <div className="item-cell9">
        <div className="oct-20239">05 Oct 2023</div>
      </div>
      <div className="item-cell10">
        <div className="oct-202310">05 Oct 2023</div>
      </div>
    </div>
  );
};

export default Column;
