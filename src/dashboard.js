import React from "react";
import "./dashboard.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

function Dashboard() {
  return (
    <div className="mainpage">
      <div className="sidebar">
        <div>
          <div className="sp1">
            <img className="sp1img" src="../image.png" alt="logo" />
            <h3 className="name">
              Bharat Nara
              <span>
                <a href="/">Visit Store </a>
              </span>
            </h3>
            <KeyboardArrowDownIcon className="arrow" />
          </div>
        </div>
        <div className="sp2">
          <div className="list-group">
            <a className="list-group-item list-group-item-action" href="/">
              <HomeOutlinedIcon /> Home
            </a>
            <a className="list-group-item list-group-item-action" href="/">
              <AssignmentOutlinedIcon /> Orders
            </a>
            <a className="list-group-item list-group-item-action" href="/">
              <GridViewOutlinedIcon /> Products
            </a>
            <a className="list-group-item list-group-item-action" href="/">
              {" "}
              <LocalShippingOutlinedIcon /> Delivery
            </a>
            <a className="list-group-item list-group-item-action" href="/">
              <CampaignOutlinedIcon /> Marketing
            </a>
            <a className="list-group-item list-group-item-action" href="/">
              <SignalCellularAltOutlinedIcon /> Analytics
            </a>
            <a
              className="list-group-item list-group-item-action active"
              href="/"
            >
              <PaymentsOutlinedIcon /> Payments
            </a>
            <a className="list-group-item list-group-item-action" href="/">
              <NearMeOutlinedIcon style={{ transform: "rotate(-90deg)" }} />{" "}
              Tools
            </a>
            <a className="list-group-item list-group-item-action" href="/">
              {" "}
              <PercentOutlinedIcon /> Discounts
            </a>
            <a className="list-group-item list-group-item-action" href="/">
              <PeopleAltOutlinedIcon /> Audience
            </a>
            <a className="list-group-item list-group-item-action" href="/">
              <PaletteOutlinedIcon /> Appearance
            </a>
            <a className="list-group-item list-group-item-action" href="/">
              <BoltIcon /> Plugins
            </a>
          </div>
        </div>
        <div className="sp1 sp3">
          <AccountBalanceWalletOutlinedIcon />
          <h3 className="name">
            Available Credits
            <span>
              222.10
            </span>
          </h3>
        </div>
        
      </div>
      <div className="maincontent">
        <div className="maincontainer">
          <nav className="navbar">
            <div className="container">
              <div className="payments">
                <a href="/">
                  <h3>Payouts</h3>
                  <HelpOutlineOutlinedIcon style={{ fontSize: 15 }} />
                  <span>How it works</span>
                </a>
              </div>

              <div className="searchcomp">
                <SearchOutlinedIcon />
                <input
                  className="inputsearch"
                  placeholder="Search features, tutorials, etc."
                />
              </div>
              <div className="icons">
                <img className="iconcomment" src="../comment.png" alt="3" />
                <img src="../Menu.png" alt="3" />
              </div>
            </div>
          </nav>
          <div className="maindiv">
            <div className="overview">
              <div className="frame">
                <div className="text-wrapper">Overview</div>
                <div className="group-wrapper">
                  <div className="group">
                    <div className="overlap-group">
                      <div className="div">
                        Last Month <KeyboardArrowDownIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="orderstat">
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <div className="div">
                      <div className="div-2">
                        <div className="text-wrapper">Online orders</div>
                      </div>
                      <div className="text-wrapper-2">231</div>
                    </div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="div">
                    <div className="div-2">
                      <div className="text-wrapper">Amount received</div>
                    </div>
                    <div className="div-3">
                      <div className="div-4">
                        <div className="text-wrapper-3">₹23,92,312.19</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="trans">
              <h5>Transactions | This Month</h5>
            </div>
            <div className="table">
              <div className="sort">
                <input
                  placeholder="Search by order ID..."
                  className="input-search-box-instance"
                  size="default"
                  type="default"
                />
                <div className="div">
                  <div className="div">
                    <div className="div-2">
                      <div className="div">
                        <button className="button-sort">
                          <div className="text-wrapper-2">Sort</div>
                          <SyncAltOutlinedIcon
                            style={{ transform: "rotate(-90deg)" }}
                          />
                        </button>
                      </div>
                      <img
                        className="group"
                        alt="Group"
                        src="https://c.animaapp.com/44QWei0Y/img/group-898.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <table>
                  <thead>
                    <tr className="header">
                      <th scope="col">Order ID</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Order Amount</th>
                      <th scope="col">Transaction Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">#281209</th>
                      <td>7 July, 2023</td>
                      <td>₹1,278.23</td>
                      <td>₹22</td>
                    </tr>
                    <tr>
                      <th scope="row">#281209</th>
                      <td>7 July, 2023</td>
                      <td>₹1,278.23</td>
                      <td>₹22</td>
                    </tr>
                    <tr>
                      <th scope="row">#281209</th>
                      <td>7 July, 2023</td>
                      <td>₹1,278.23</td>
                      <td>₹22</td>
                    </tr>
                    <tr>
                      <th scope="row">#281209</th>
                      <td>7 July, 2023</td>
                      <td>₹1,278.23</td>
                      <td>₹22</td>
                    </tr>
                    <tr>
                      <th scope="row">#281209</th>
                      <td>7 July, 2023</td>
                      <td>₹1,278.23</td>
                      <td>₹22</td>
                    </tr>
                    <tr>
                      <th scope="row">#281209</th>
                      <td>7 July, 2023</td>
                      <td>₹1,278.23</td>
                      <td>₹22</td>
                    </tr>
                    <tr>
                      <th scope="row">#281209</th>
                      <td>7 July, 2023</td>
                      <td>₹1,278.23</td>
                      <td>₹22</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
