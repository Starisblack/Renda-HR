import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = (props) => {
  const menuItems = [
    {
      title: "Products",
      columns: [
        { details: ["Talent Sourcing", "Payroll Mgmt", ] },
        { details: ["Core-HR","Performance" ] },
        { details: ["Attendance",] },
      ],
    },
    {
      title: "Company",
      columns: [
        {
          details: [
            "About Us",
            "Blog",
            "Terms of Service",
          ],
        },
        { details: ["Contact Us", "Support Center"] },
        { details: ["FAQs", "Privacy"] },
      ],
    },
  ];

  return (
    <ul className="NavigationItems">
      {menuItems.map((item) => {
        return (
          <div key={item.title} className="dropdown">
            <NavigationItem>
              {item.title}
              <i className="fas fa-chevron-down"></i>
            </NavigationItem>
            <div className="dropdown-content">
              {item.columns.map((column, index) => {
                return (
                  <ul key={index * Math.random()} className="p-2">
                    {column.details.map((list) => {
                      return (
                        <li key={list}>
                          <a href="/">{list}</a>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          </div>
        );
      })}

   
      <NavigationItem link="/#">Pricing</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
