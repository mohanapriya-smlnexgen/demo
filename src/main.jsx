import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  LayoutDashboard,
  Users,
  HandCoins,
  Wallet,
  CalendarClock,
  Bell,
  ChartNoAxesCombined,
  Settings,
  Search,
  ChevronDown,
  Menu,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Clock3,
  CheckCircle2,
  CircleAlert,
  FileText,
  Filter,
  MoreHorizontal,
  UserRound,
  CalendarDays,
  X,
  Check,
  Ban,
  Eye,
  Download,
  Landmark,
  BadgeCheck,
  CircleDollarSign,
  Activity,
} from "lucide-react";
import "./styles.css";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Customers", icon: Users },
  { label: "Loans", icon: HandCoins },
  { label: "Collections", icon: Wallet },
  { label: "FD & RD", icon: Landmark },
  { label: "Finance", icon: CircleDollarSign },
  { label: "Profit & Loss", icon: ChartNoAxesCombined },
  { label: "EMI Management", icon: CalendarClock },
  { label: "Notifications", icon: Bell },
  { label: "Reports", icon: ChartNoAxesCombined },
  { label: "Settings", icon: Settings },
];
const initialRequests = [
  {
    id: "REQ-1028",
    name: "Lakshmi Devi",
    customerId: "CUS000125",
    loan: "LN-240118",
    current: "15 Oct 2026",
    requested: "18 Oct 2026",
    reason: "Medical appointment",
    submitted: "12 Oct 2026",
    status: "Pending",
  },
  {
    id: "REQ-1027",
    name: "Ramesh Kumar",
    customerId: "CUS000118",
    loan: "LN-240103",
    current: "14 Oct 2026",
    requested: "16 Oct 2026",
    reason: "Family emergency",
    submitted: "11 Oct 2026",
    status: "Pending",
  },
  {
    id: "REQ-1021",
    name: "Meena Selvam",
    customerId: "CUS000096",
    loan: "LN-231198",
    current: "10 Oct 2026",
    requested: "12 Oct 2026",
    reason: "Salary credited late",
    submitted: "08 Oct 2026",
    status: "Approved",
  },
];
const customers = [
  ["CUS000125", "Lakshmi Devi", "Vellore Center", "₹45,000", "Active", "98%"],
  ["CUS000118", "Ramesh Kumar", "Hosur Center", "₹60,000", "Active", "92%"],
  ["CUS000109", "Priya S.", "Krishnagiri Center", "₹30,000", "Active", "100%"],
  ["CUS000096", "Meena Selvam", "Vellore Center", "₹25,000", "Active", "87%"],
  ["CUS000087", "Saravanan M.", "Salem Center", "₹75,000", "Review", "76%"],
];
const loans = [
  ["LN-240118", "Lakshmi Devi", "₹45,000", "₹3,750", "15 Oct 2026", "Active"],
  ["LN-240103", "Ramesh Kumar", "₹60,000", "₹5,000", "14 Oct 2026", "Active"],
  ["LN-240099", "Priya S.", "₹30,000", "₹2,500", "16 Oct 2026", "Active"],
  ["LN-231198", "Meena Selvam", "₹25,000", "₹2,080", "10 Oct 2026", "Overdue"],
];
const collections = [
  ["COL-0081", "Lakshmi Devi", "₹3,750", "Today, 10:15 AM", "UPI", "Collected"],
  ["COL-0080", "Priya S.", "₹2,500", "Today, 09:42 AM", "Cash", "Collected"],
  ["COL-0079", "Ramesh Kumar", "₹5,000", "Today, 09:05 AM", "—", "Due"],
  ["COL-0078", "Saravanan M.", "₹4,200", "Yesterday", "Cash", "Collected"],
];
function App() {
  const [active, setActive] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [requests, setRequests] = useState(initialRequests);
  const [showRequest, setShowRequest] = useState(false);
  const [showLoan, setShowLoan] = useState(false);
  const [notice, setNotice] = useState("");
  const [requestForm, setRequestForm] = useState({
    customer: "Lakshmi Devi",
    current: "2026-10-15",
    requested: "2026-10-18",
    reason: "Medical appointment",
  });
  const pending = requests.filter((r) => r.status === "Pending").length;
  const notify = (msg) => {
    setNotice(msg);
    setTimeout(() => setNotice(""), 2800);
  };
  const decide = (id, status) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r)),
    );
    notify(`Request ${id} ${status.toLowerCase()}.`);
  };
  const filteredCustomers = customers.filter((c) =>
    c.join(" ").toLowerCase().includes(search.toLowerCase()),
  );
  const titleMap = {
    Dashboard: "Dashboard",
    Customers: "Customer Management",
    Loans: "Loan Management",
    Collections: "Collections",
    "FD & RD": "FD & RD Management",
    Finance: "Finance Overview",
    "Profit & Loss": "Profit & Loss",
    "EMI Management": "EMI Management",
    Notifications: "Notifications",
    Reports: "Reports & Analytics",
    Settings: "Settings",
  };
  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">
            <Landmark size={22} />
          </div>
          <div>
            <strong>SMLNEXGEN</strong>
            <span>Microfinance Suite</span>
          </div>
          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>
        <div className="org-switch">
          <div className="org-avatar">SM</div>
          <div>
            <b>SMLNEXGEN Microfinance</b>
            <small>Organization</small>
          </div>
          <ChevronDown size={15} />
        </div>
        <div className="nav-caption">WORKSPACE</div>
        <nav>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`nav-item ${active === item.label ? "active" : ""}`}
                onClick={() => {
                  setActive(item.label);
                  setSidebarOpen(false);
                  setSearch("");
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
                {item.label === "Notifications" && (
                  <i className="nav-count">4</i>
                )}
              </button>
            );
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">
              <Activity size={17} />
            </div>
            <b>Need a hand?</b>
            <p>Visit the help center for quick guidance.</p>
            <button
              onClick={() => notify("Help center is available in this demo.")}
            >
              Open help center <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="profile">
            <div className="avatar admin">MP</div>
            <div className="profile-info">
              <b>Karthi</b>
              <span>Branch Manager</span>
            </div>
            <MoreHorizontal size={18} />
          </div>
        </div>
      </aside>
      {sidebarOpen && (
        <div className="scrim" onClick={() => setSidebarOpen(false)} />
      )}
      <main className="main-area">
        <header className="topbar">
          <button
            className="mobile-menu icon-button"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>
          <div className="breadcrumbs">
            Workspace <span>/</span> <b>{titleMap[active]}</b>
          </div>
          <div className="top-actions">
            <label className="global-search">
              <Search size={16} />
              <input
                placeholder="Search customers, loans..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <kbd>⌘ K</kbd>
            </label>
            <button
              className="icon-button notification-btn"
              onClick={() => setActive("Notifications")}
              aria-label="Notifications"
            >
              <Bell size={19} />
              <i />
            </button>
            <div className="top-divider" />
            <div className="top-user">
              <div className="avatar admin">MP</div>
              <div>
                <b>Karthi</b>
                <span>Branch Manager</span>
              </div>
              <ChevronDown size={15} />
            </div>
          </div>
        </header>
        <div className="page-content">
          <div className="page-heading">
            <div>
              <div className="eyebrow">TUESDAY, OCTOBER 13, 2026</div>
              <h1>{titleMap[active]}</h1>
              <p>
                {active === "Dashboard"
                  ? "Here’s what’s happening with your business today."
                  : active === "EMI Management"
                    ? "Track upcoming instalments and manage date-change requests."
                    : `Manage and review your ${active.toLowerCase()} in one place.`}
              </p>
            </div>
            <div className="heading-actions">
              {active === "Dashboard" && (
                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    notify("Report export prepared for this demo.")
                  }
                >
                  <Download size={16} /> Export report
                </button>
              )}
              <button
                className="btn btn-primary"
                onClick={() =>
                  active === "Loans"
                    ? setShowLoan(true)
                    : active === "EMI Management"
                      ? setShowRequest(true)
                      : active === "Customers"
                        ? notify(
                            "New customer form is ready to connect to your backend.",
                          )
                        : notify(
                            `Create ${active === "Dashboard" ? "new loan application" : active.toLowerCase()} flow opened.`,
                          )
                }
              >
                <Plus size={17} />
                {active === "Loans"
                  ? "New loan"
                  : active === "EMI Management"
                    ? "Date change request"
                    : active === "Customers"
                      ? "Add customer"
                      : active === "Dashboard"
                        ? "New application"
                        : "Add new"}
              </button>
            </div>
          </div>
          {active === "Dashboard" && (
            <Dashboard
              requests={requests}
              pending={pending}
              onNavigate={setActive}
              onRequest={() => setShowRequest(true)}
            />
          )}
          {active === "Customers" && (
            <Customers
              data={filteredCustomers}
              search={search}
              setSearch={setSearch}
              onAdd={() =>
                notify("New customer form is ready to connect to your backend.")
              }
            />
          )}
          {active === "Loans" && <Loans onNew={() => setShowLoan(true)} />}
          {active === "Collections" && <Collections />}
          {active === "FD & RD" && <FdRd onNotify={notify} />}
          {active === "Finance" && <FinancePage />}
          {active === "Profit & Loss" && <ProfitLossPage />}
          {active === "EMI Management" && (
            <EmiManagement
              requests={requests}
              onRequest={() => setShowRequest(true)}
              onDecide={decide}
            />
          )}
          {active === "Notifications" && (
            <Notifications
              requests={requests}
              onNavigate={setActive}
              onDecide={decide}
            />
          )}
          {active === "Reports" && <Reports />}
          {active === "Settings" && <SettingsPage notify={notify} />}
        </div>
        <footer className="footer">
          <span>© 2026 SMLNEXGEN. All rights reserved.</span>
          <span>
            <i className="status-dot" /> All systems operational{" "}
            <span className="footer-sep">·</span> v1.0.0
          </span>
        </footer>
      </main>
      {notice && (
        <div className="toast">
          <CheckCircle2 size={18} />
          {notice}
        </div>
      )}
      {showRequest && (
        <Modal
          title="Request EMI date change"
          subtitle="Submit a date-change request for admin review."
          onClose={() => setShowRequest(false)}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const customer =
                customers.find((c) => c[1] === requestForm.customer) ||
                customers[0];
              setRequests((prev) => [
                {
                  id: `REQ-${1030 + prev.length}`,
                  name: requestForm.customer,
                  customerId: customer[0],
                  loan: "LN-240118",
                  current: new Date(
                    requestForm.current + "T00:00:00",
                  ).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }),
                  requested: new Date(
                    requestForm.requested + "T00:00:00",
                  ).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }),
                  reason: requestForm.reason,
                  submitted: "13 Oct 2026",
                  status: "Pending",
                },
                ...prev,
              ]);
              setShowRequest(false);
              setActive("EMI Management");
              notify("EMI date-change request submitted for admin approval.");
            }}
          >
            <label>
              Customer
              <select
                value={requestForm.customer}
                onChange={(e) =>
                  setRequestForm({ ...requestForm, customer: e.target.value })
                }
              >
                {customers.map((c) => (
                  <option key={c[0]}>{c[1]}</option>
                ))}
              </select>
            </label>
            <div className="form-grid">
              <label>
                Current EMI date
                <input
                  required
                  type="date"
                  value={requestForm.current}
                  onChange={(e) =>
                    setRequestForm({ ...requestForm, current: e.target.value })
                  }
                />
              </label>
              <label>
                Requested date
                <input
                  required
                  type="date"
                  value={requestForm.requested}
                  min="2026-10-13"
                  onChange={(e) =>
                    setRequestForm({
                      ...requestForm,
                      requested: e.target.value,
                    })
                  }
                />
              </label>
            </div>
            <label>
              Reason for change
              <select
                value={requestForm.reason}
                onChange={(e) =>
                  setRequestForm({ ...requestForm, reason: e.target.value })
                }
              >
                <option>Medical appointment</option>
                <option>Family emergency</option>
                <option>Salary credited late</option>
                <option>Travel / personal reason</option>
                <option>Other</option>
              </select>
            </label>
            <div className="info-note">
              <CircleAlert size={17} />
              <span>
                This request will remain pending until an administrator approves
                or rejects it.
              </span>
            </div>
            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowRequest(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                <Check size={16} /> Submit request
              </button>
            </div>
          </form>
        </Modal>
      )}
      {showLoan && (
        <Modal
          title="New loan application"
          subtitle="Create a sample loan application."
          onClose={() => setShowLoan(false)}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowLoan(false);
              notify("Sample loan application created successfully.");
            }}
          >
            <label>
              Customer
              <select required>
                {customers.map((c) => (
                  <option key={c[0]}>{c[1]}</option>
                ))}
              </select>
            </label>
            <div className="form-grid">
              <label>
                Loan amount (₹)
                <input required type="number" min="1000" defaultValue="50000" />
              </label>
              <label>
                Tenure (months)
                <select defaultValue="12">
                  <option>6</option>
                  <option>12</option>
                  <option>18</option>
                  <option>24</option>
                </select>
              </label>
            </div>
            <label>
              Loan purpose
              <input required placeholder="e.g. Small business expansion" />
            </label>
            <div className="info-note">
              <CircleAlert size={17} />
              <span>This is a front-end prototype using sample data only.</span>
            </div>
            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowLoan(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                <Plus size={16} /> Create application
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
function Dashboard({ requests, pending, onNavigate, onRequest }) {
  return (
    <>
      <section className="welcome-banner">
        <div className="welcome-copy">
          <span className="welcome-tag">
            <span className="live-dot" /> DAILY OVERVIEW
          </span>
          <h2>
            Good afternoon, Karthi <span>✦</span>
          </h2>
          <p>Small steps today. Big financial dreams tomorrow.</p>
          <button onClick={() => onNavigate("Reports")}>
            View business insights <ArrowUpRight size={15} />
          </button>
        </div>
        <div className="welcome-art">
          <div className="art-circle">
            <Landmark size={40} />
          </div>
          <div className="art-leaf leaf-one">✦</div>
          <div className="art-leaf leaf-two">✧</div>
          <div className="art-coin">₹</div>
        </div>
      </section>
      <section className="stats-grid">
        <Stat
          label="Today's Due"
          value="₹1,28,450"
          change="18 customers"
          icon={CalendarClock}
          color="blue"
          trend="down"
        />
        <Stat
          label="Collected Today"
          value="₹98,750"
          change="76.9% of target"
          icon={CircleDollarSign}
          color="green"
          trend="up"
        />
        <Stat
          label="Overdue Amount"
          value="₹72,300"
          change="12 customers"
          icon={CircleAlert}
          color="orange"
          trend="down"
        />
        <Stat
          label="Pending Approvals"
          value={String(pending).padStart(2, "0")}
          change="EMI date requests"
          icon={Clock3}
          color="purple"
          trend="neutral"
          onClick={() => onNavigate("EMI Management")}
        />
        <Stat
          label="Disbursed Today"
          value="₹2,50,000"
          change="5 loans"
          icon={HandCoins}
          color="cyan"
          trend="up"
        />
      </section>
      <section className="dashboard-grid">
        <div className="panel quick-panel">
          <PanelTitle
            title="Quick actions"
            subtitle="Common tasks, right at your fingertips"
          />
          <div className="quick-actions">
            <QuickAction
              icon={FileText}
              label="New loan application"
              tone="blue"
              onClick={() => onNavigate("Loans")}
            />
            <QuickAction
              icon={Wallet}
              label="Collect payment"
              tone="green"
              onClick={() => onNavigate("Collections")}
            />
            <QuickAction
              icon={CalendarClock}
              label="Open EMI schedule"
              tone="purple"
              onClick={() => onNavigate("EMI Management")}
            />
            <QuickAction
              icon={Landmark}
              label="Manage FD & RD"
              tone="orange"
              onClick={() => onNavigate("FD & RD")}
            />
          </div>
          <div className="search-customer">
            <Search size={17} />
            <input placeholder="Search customer name or mobile number..." />
            <button onClick={() => onNavigate("Customers")}>
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
        <div className="panel tasks-panel">
          <PanelTitle
            title="Pending approvals"
            subtitle="Items that need your attention"
            action="View all"
            onAction={() => onNavigate("EMI Management")}
          />
          <div className="task-list">
            {requests
              .filter((r) => r.status === "Pending")
              .slice(0, 3)
              .map((r, i) => (
                <div className="task-row" key={r.id}>
                  <div className={`task-icon task-${i % 3}`}>
                    <CalendarClock size={17} />
                  </div>
                  <div className="task-copy">
                    <b>{r.name}</b>
                    <span>EMI date change · {r.id}</span>
                  </div>
                  <button
                    className="row-arrow"
                    onClick={() => onNavigate("EMI Management")}
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              ))}
            {pending === 0 && <Empty text="You're all caught up!" />}
          </div>
        </div>
        <div className="panel chart-panel">
          <PanelTitle title="Collection trend" subtitle="Last 7 days" />
          <div className="chart-legend">
            <span>
              <i className="legend-collected" /> Collected
            </span>
            <span>
              <i className="legend-due" /> Due
            </span>
          </div>
          <MiniChart />
        </div>
        <div className="panel due-panel">
          <PanelTitle
            title="Upcoming EMI dues"
            subtitle="Next 3 scheduled payments"
            action="View all"
            onAction={() => onNavigate("EMI Management")}
          />
          <div className="due-list">
            {[
              ["Lakshmi Devi", "15 Oct", "₹3,750"],
              ["Ramesh Kumar", "14 Oct", "₹5,000"],
              ["Priya S.", "16 Oct", "₹2,500"],
            ].map((x) => (
              <div className="due-row" key={x[0]}>
                <div className="avatar customer-avatar">
                  {x[0]
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="due-name">
                  <b>{x[0]}</b>
                  <span>{x[1]} 2026</span>
                </div>
                <strong>{x[2]}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bottom-note">
        <div className="note-icon">
          <Bell size={17} />
        </div>
        <div>
          <b>EMI reminders are active</b>
          <p>
            Customers with upcoming instalments are flagged automatically.
            Review date-change requests before the due date.
          </p>
        </div>
        <button onClick={onRequest}>
          Create date-change request <ArrowUpRight size={15} />
        </button>
      </div>
    </>
  );
}
function Stat({ label, value, change, icon: Icon, color, trend, onClick }) {
  return (
    <div
      className={`stat-card ${onClick ? "clickable" : ""}`}
      onClick={onClick}
    >
      <div className="stat-top">
        <span>{label}</span>
        <div className={`stat-icon ${color}`}>
          <Icon size={18} />
        </div>
      </div>
      <strong className="stat-value">{value}</strong>
      <div className="stat-bottom">
        <span className="stat-change">{change}</span>
        {trend !== "neutral" && (
          <span className={`trend ${trend}`}>
            {trend === "up" ? (
              <ArrowUpRight size={13} />
            ) : (
              <ArrowDownRight size={13} />
            )}
          </span>
        )}
      </div>
    </div>
  );
}
function PanelTitle({ title, subtitle, action, onAction }) {
  return (
    <div className="panel-title">
      <div>
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action && (
        <button onClick={onAction}>
          {action}
          <ArrowUpRight size={14} />
        </button>
      )}
    </div>
  );
}
function QuickAction({ icon: Icon, label, tone, onClick }) {
  return (
    <button className="quick-action" onClick={onClick}>
      <span className={`quick-icon ${tone}`}>
        <Icon size={19} />
      </span>
      <span>{label}</span>
      <ArrowUpRight size={14} className="quick-arrow" />
    </button>
  );
}
function MiniChart() {
  return (
    <div className="mini-chart">
      <div className="chart-y">
        <span>₹1.5L</span>
        <span>₹1.0L</span>
        <span>₹50k</span>
        <span>₹0</span>
      </div>
      <svg
        viewBox="0 0 500 145"
        preserveAspectRatio="none"
        role="img"
        aria-label="Collection trend chart"
      >
        <defs>
          <linearGradient id="fillBlue" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2f73e8" stopOpacity=".16" />
            <stop offset="100%" stopColor="#2f73e8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 55, 90, 125].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="500"
            y2={y}
            stroke="#edf1f7"
            strokeDasharray="3 4"
          />
        ))}
        <path
          d="M0 93 L42 74 L84 82 L126 55 L168 67 L210 40 L252 57 L294 48 L336 62 L378 33 L420 46 L462 21 L500 30 L500 145 L0 145Z"
          fill="url(#fillBlue)"
        />
        <polyline
          points="0,93 42,74 84,82 126,55 168,67 210,40 252,57 294,48 336,62 378,33 420,46 462,21 500,30"
          fill="none"
          stroke="#3679ec"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <polyline
          points="0,112 42,104 84,91 126,103 168,85 210,92 252,79 294,88 336,72 378,82 420,69 462,73 500,58"
          fill="none"
          stroke="#17b890"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {[0, 84, 168, 252, 336, 420, 500].map((x, i) => (
          <text
            key={x}
            x={x}
            y="143"
            textAnchor={i === 0 ? "start" : i === 6 ? "end" : "middle"}
            fill="#98a3b5"
            fontSize="10"
          >
            {
              [
                "Oct 7",
                "Oct 8",
                "Oct 9",
                "Oct 10",
                "Oct 11",
                "Oct 12",
                "Oct 13",
              ][i]
            }
          </text>
        ))}
      </svg>
    </div>
  );
}
function Table({ headers, rows, empty = "No records found" }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length ? (
            rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length}>
                <Empty text={empty} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
function Customers({ data, search, setSearch, onAdd }) {
  return (
    <>
      <div className="list-summary">
        <div>
          <b>Customer directory</b>
          <span>{data.length} customers shown</span>
        </div>
        <div className="list-tools">
          <label className="table-search">
            <Search size={16} />
            <input
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <button className="btn btn-secondary" onClick={() => setSearch("")}>
            <Filter size={15} /> Clear filters
          </button>
        </div>
      </div>
      <div className="stats-grid compact-stats">
        <Stat
          label="Total customers"
          value="1,284"
          change="+8.4% this month"
          icon={Users}
          color="blue"
          trend="up"
        />
        <Stat
          label="Active customers"
          value="1,102"
          change="85.8% of total"
          icon={BadgeCheck}
          color="green"
          trend="up"
        />
        <Stat
          label="KYC pending"
          value="24"
          change="Needs verification"
          icon={FileText}
          color="orange"
          trend="neutral"
        />
        <Stat
          label="Groups / centers"
          value="36"
          change="Across 8 branches"
          icon={Landmark}
          color="purple"
          trend="neutral"
        />
      </div>
      <div className="panel table-panel">
        <PanelTitle
          title="All customers"
          subtitle="Customer profiles and repayment overview"
        />
        <Table
          headers={[
            "Customer ID",
            "Customer",
            "Center",
            "Active loan",
            "Status",
            "Repayment rate",
            "",
          ]}
          rows={data.map((c) => [
            <span className="mono">{c[0]}</span>,
            <div className="person-cell">
              <div className="avatar customer-avatar">
                {c[1]
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <b>{c[1]}</b>
            </div>,
            c[2],
            c[3],
            <Status value={c[4]} />,
            <span className="repay-rate">{c[5]}</span>,
            <button
              className="icon-button tiny"
              title="View customer"
              onClick={() =>
                alert(`${c[1]} · ${c[0]}\\nCustomer profile preview`)
              }
            >
              <Eye size={16} />
            </button>,
          ])}
        />
      </div>
    </>
  );
}
function Loans({ onNew }) {
  return (
    <>
      <div className="stats-grid compact-stats">
        <Stat
          label="Active loans"
          value="842"
          change="Across all branches"
          icon={HandCoins}
          color="blue"
          trend="neutral"
        />
        <Stat
          label="Awaiting approval"
          value="18"
          change="Requires review"
          icon={Clock3}
          color="purple"
          trend="neutral"
        />
        <Stat
          label="Disbursed this month"
          value="₹18.4L"
          change="+12.6% vs last month"
          icon={CircleDollarSign}
          color="green"
          trend="up"
        />
        <Stat
          label="Overdue loans"
          value="42"
          change="Review collection plan"
          icon={CircleAlert}
          color="orange"
          trend="down"
        />
      </div>
      <div className="panel table-panel">
        <PanelTitle
          title="Loan portfolio"
          subtitle="Track applications, repayment and loan status"
          action="New application"
          onAction={onNew}
        />
        <Table
          headers={[
            "Loan ID",
            "Customer",
            "Principal",
            "EMI amount",
            "Next due date",
            "Status",
            "",
          ]}
          rows={loans.map((l) => [
            <span className="mono">{l[0]}</span>,
            l[1],
            l[2],
            l[3],
            l[4],
            <Status value={l[5]} />,
            <button
              className="icon-button tiny"
              onClick={() =>
                alert(
                  `Loan details: ${l[0]}\\nCustomer: ${l[1]}\\nPrincipal: ${l[2]}`,
                )
              }
            >
              <Eye size={16} />
            </button>,
          ])}
        />
      </div>
      <div className="panel lifecycle">
        <PanelTitle
          title="Loan lifecycle"
          subtitle="A clear path from application to closure"
        />
        <div className="lifecycle-steps">
          {[
            ["01", "Application", "Customer submits details"],
            ["02", "Verification", "KYC and eligibility"],
            ["03", "Approval", "Authorized review"],
            ["04", "Disbursement", "Funds released"],
            ["05", "Repayment", "EMI tracking"],
            ["06", "Closed", "Loan completed"],
          ].map((s, i) => (
            <div className="lifecycle-step" key={s[0]}>
              <div className={`step-circle step-${i}`}>{s[0]}</div>
              <b>{s[1]}</b>
              <span>{s[2]}</span>
              {i < 5 && <div className="step-line" />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
function Collections() {
  return (
    <>
      <div className="stats-grid compact-stats">
        <Stat
          label="Collected today"
          value="₹98,750"
          change="31 payments"
          icon={CircleDollarSign}
          color="green"
          trend="up"
        />
        <Stat
          label="Pending collection"
          value="₹29,700"
          change="8 payments due"
          icon={Clock3}
          color="orange"
          trend="neutral"
        />
        <Stat
          label="Collection efficiency"
          value="76.9%"
          change="+4.2% this week"
          icon={ChartNoAxesCombined}
          color="blue"
          trend="up"
        />
        <Stat
          label="Receipts generated"
          value="31"
          change="All channels"
          icon={FileText}
          color="purple"
          trend="neutral"
        />
      </div>
      <div className="panel table-panel">
        <PanelTitle
          title="Recent collections"
          subtitle="Payment receipts and collection status"
        />
        <Table
          headers={[
            "Receipt ID",
            "Customer",
            "Amount",
            "Collected at",
            "Payment method",
            "Status",
            "",
          ]}
          rows={collections.map((c) => [
            <span className="mono">{c[0]}</span>,
            c[1],
            <b>{c[2]}</b>,
            c[3],
            c[4],
            <Status value={c[5]} />,
            <button
              className="icon-button tiny"
              onClick={() => alert(`Receipt ${c[0]} preview`)}
            >
              <FileText size={16} />
            </button>,
          ])}
        />
      </div>
      <div className="bottom-note">
        <div className="note-icon green-note">
          <Wallet size={17} />
        </div>
        <div>
          <b>Collection follow-up</b>
          <p>
            Review customers with unpaid instalments and record payments once
            received.
          </p>
        </div>
        <button
          onClick={() =>
            alert("Payment entry form can be connected to the backend.")
          }
        >
          Record payment <ArrowUpRight size={15} />
        </button>
      </div>
    </>
  );
}
function EmiManagement({ requests, onRequest, onDecide }) {
  const [tab, setTab] = useState("All requests");
  const [filter, setFilter] = useState("All");
  const visible = requests.filter(
    (r) =>
      (filter === "All" || r.status === filter) &&
      (tab === "All requests" ||
        (tab === "Pending approval"
          ? r.status === "Pending"
          : r.status !== "Pending")),
  );
  return (
    <>
      <div className="emi-banner">
        <div className="emi-banner-icon">
          <CalendarClock size={24} />
        </div>
        <div>
          <h2>Stay ahead of every instalment</h2>
          <p>
            Upcoming EMI reminders and date-change approvals in one workspace.
          </p>
        </div>
        <div className="emi-banner-stats">
          <div>
            <b>
              {requests
                .filter((r) => r.status === "Pending")
                .length.toString()
                .padStart(2, "0")}
            </b>
            <span>Awaiting review</span>
          </div>
          <div>
            <b>
              {requests
                .filter((r) => r.status === "Approved")
                .length.toString()
                .padStart(2, "0")}
            </b>
            <span>Approved</span>
          </div>
        </div>
      </div>
      <div className="stats-grid compact-stats">
        <Stat
          label="EMI due today"
          value="₹1,28,450"
          change="18 customers"
          icon={CalendarClock}
          color="blue"
          trend="neutral"
        />
        <Stat
          label="Due in next 7 days"
          value="₹4,82,000"
          change="96 instalments"
          icon={Clock3}
          color="purple"
          trend="neutral"
        />
        <Stat
          label="Overdue instalments"
          value="12"
          change="₹72,300 outstanding"
          icon={CircleAlert}
          color="orange"
          trend="down"
        />
        <Stat
          label="Reminder status"
          value="Active"
          change="SMS / in-app demo"
          icon={Bell}
          color="green"
          trend="up"
        />
      </div>
      <div className="panel table-panel">
        <div className="emi-table-head">
          <PanelTitle
            title="EMI date-change requests"
            subtitle="Review customer requests before changing their due date"
          />
          <div className="request-filters">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option>All</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
            <button className="btn btn-primary" onClick={onRequest}>
              <Plus size={16} /> New request
            </button>
          </div>
        </div>
        <div className="tabs">
          {["All requests", "Pending approval", "Reviewed"].map((t) => (
            <button
              className={tab === t ? "selected" : ""}
              onClick={() => setTab(t)}
              key={t}
            >
              {t}
              {t === "Pending approval" && (
                <span>
                  {requests.filter((r) => r.status === "Pending").length}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="request-list">
          {visible.map((r) => (
            <div className="request-card" key={r.id}>
              <div className="request-person">
                <div className="avatar customer-avatar">
                  {r.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <b>{r.name}</b>
                  <span>
                    {r.customerId} <i>·</i> {r.loan}
                  </span>
                  <small>Submitted {r.submitted}</small>
                </div>
              </div>
              <div className="date-change">
                <div>
                  <span>Current EMI date</span>
                  <b>{r.current}</b>
                </div>
                <ArrowUpRight size={17} />
                <div>
                  <span>Requested date</span>
                  <b className="requested-date">{r.requested}</b>
                </div>
              </div>
              <div className="request-reason">
                <span>Reason</span>
                <b>{r.reason}</b>
              </div>
              <div className="request-status">
                <Status value={r.status} />
                {r.status === "Pending" ? (
                  <div className="approval-actions">
                    <button
                      className="approve-btn"
                      onClick={() => onDecide(r.id, "Approved")}
                      title="Approve"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      className="reject-btn"
                      onClick={() => onDecide(r.id, "Rejected")}
                      title="Reject"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <span className="reviewed-label">Reviewed</span>
                )}
              </div>
            </div>
          ))}
          {!visible.length && <Empty text="No requests match this filter." />}
        </div>
        <div className="workflow-footer">
          <div className="workflow-icon">
            <BadgeCheck size={18} />
          </div>
          <div>
            <b>Admin approval workflow</b>
            <p>
              Requests remain pending until an authorized admin approves or
              rejects them. The EMI schedule should only update after approval.
            </p>
          </div>
        </div>
      </div>
      <div className="panel reminder-panel">
        <div className="reminder-icon">
          <Bell size={20} />
        </div>
        <div>
          <h3>EMI due-date reminders</h3>
          <p>
            Prototype reminder rules: 3 days before due date, on the due date,
            and follow-up for overdue instalments. Connect an SMS/email provider
            to enable real delivery.
          </p>
        </div>
        <span className="reminder-pill">
          <i /> Configured in demo
        </span>
      </div>
    </>
  );
}
function Notifications({ requests, onNavigate, onDecide }) {
  const pending = requests.filter((r) => r.status === "Pending");
  return (
    <>
      <div className="stats-grid compact-stats">
        <Stat
          label="Unread notifications"
          value={String(2 + pending.length)}
          change="Needs your attention"
          icon={Bell}
          color="blue"
          trend="neutral"
        />
        <Stat
          label="Pending approvals"
          value={String(pending.length)}
          change="EMI date changes"
          icon={Clock3}
          color="purple"
          trend="neutral"
        />
        <Stat
          label="EMI reminders"
          value="18"
          change="Due today"
          icon={CalendarClock}
          color="orange"
          trend="neutral"
        />
        <Stat
          label="System status"
          value="Active"
          change="All services running"
          icon={CheckCircle2}
          color="green"
          trend="up"
        />
      </div>
      <div className="panel table-panel">
        <PanelTitle
          title="Notification center"
          subtitle="Important updates and actions for your branch"
        />
        <div className="notification-list">
          <div className="notification-item unread">
            <div className="notification-symbol purple">
              <CalendarClock size={18} />
            </div>
            <div className="notification-copy">
              <b>
                {pending.length} EMI date-change request
                {pending.length !== 1 ? "s" : ""} awaiting approval
              </b>
              <p>
                Review the requested due-date changes to keep repayment
                schedules accurate.
              </p>
              <span>Just now · Approval required</span>
            </div>
            <button
              className="btn btn-secondary small-btn"
              onClick={() => onNavigate("EMI Management")}
            >
              Review requests
            </button>
          </div>
          <div className="notification-item unread">
            <div className="notification-symbol orange">
              <CircleAlert size={18} />
            </div>
            <div className="notification-copy">
              <b>12 customers have overdue instalments</b>
              <p>
                ₹72,300 is currently outstanding. Follow up with the collection
                team.
              </p>
              <span>Today, 9:30 AM · Collection alert</span>
            </div>
            <button
              className="btn btn-secondary small-btn"
              onClick={() => onNavigate("Collections")}
            >
              View collections
            </button>
          </div>
          <div className="notification-item">
            <div className="notification-symbol green">
              <CheckCircle2 size={18} />
            </div>
            <div className="notification-copy">
              <b>Daily collection target is 76.9% complete</b>
              <p>
                ₹98,750 collected against today's planned collection amount.
              </p>
              <span>Today, 12:15 PM · Daily summary</span>
            </div>
          </div>
          {requests
            .filter((r) => r.status !== "Pending")
            .map((r) => (
              <div className="notification-item" key={r.id}>
                <div
                  className={`notification-symbol ${r.status === "Approved" ? "green" : "orange"}`}
                >
                  {r.status === "Approved" ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <Ban size={18} />
                  )}
                </div>
                <div className="notification-copy">
                  <b>
                    {r.id} was {r.status.toLowerCase()}
                  </b>
                  <p>
                    {r.name}'s EMI date-change request was{" "}
                    {r.status.toLowerCase()}.
                  </p>
                  <span>{r.submitted} · Request update</span>
                </div>
                <Status value={r.status} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

function FdRd({ onNotify }) {
  const [tab, setTab] = useState("Fixed Deposit");
  const [showForm, setShowForm] = useState(false);
  const [kind, setKind] = useState("FD");
  const [deposits, setDeposits] = useState([
    {
      id: "FD-26041",
      name: "Lakshmi Devi",
      type: "Fixed Deposit",
      amount: "₹50,000",
      tenure: "12 months",
      rate: "7.5%",
      maturity: "13 Oct 2027",
      status: "Active",
    },
    {
      id: "FD-26038",
      name: "Ramesh Kumar",
      type: "Fixed Deposit",
      amount: "₹25,000",
      tenure: "6 months",
      rate: "7.0%",
      maturity: "12 Apr 2027",
      status: "Active",
    },
    {
      id: "RD-26019",
      name: "Priya S.",
      type: "Recurring Deposit",
      amount: "₹2,000 / month",
      tenure: "12 months",
      rate: "6.5%",
      maturity: "13 Oct 2027",
      status: "Active",
    },
    {
      id: "RD-26016",
      name: "Meena Selvam",
      type: "Recurring Deposit",
      amount: "₹1,500 / month",
      tenure: "24 months",
      rate: "6.8%",
      maturity: "13 Oct 2028",
      status: "Active",
    },
  ]);
  const visible = deposits.filter(
    (d) =>
      tab === "FD vs RD Comparison" ||
      (tab === "Fixed Deposit"
        ? d.type === "Fixed Deposit"
        : d.type === "Recurring Deposit"),
  );
  return (
    <>
      <div className="stats-grid compact-stats">
        <Stat
          label="Active fixed deposits"
          value="248"
          change="₹1.42 Cr principal"
          icon={Landmark}
          color="blue"
          trend="neutral"
        />
        <Stat
          label="Active recurring deposits"
          value="386"
          change="₹8.64L monthly instalments"
          icon={CalendarClock}
          color="green"
          trend="up"
        />
        <Stat
          label="Maturing this month"
          value="16"
          change="Customer follow-up needed"
          icon={Clock3}
          color="orange"
          trend="neutral"
        />
        <Stat
          label="Interest payable"
          value="₹2.18L"
          change="Current period estimate"
          icon={CircleDollarSign}
          color="purple"
          trend="neutral"
        />
      </div>
      <div className="panel fd-intro">
        <div className="fd-intro-icon">
          <Landmark size={22} />
        </div>
        <div>
          <h2>Fixed Deposit & Recurring Deposit</h2>
          <p>
            Manage one-time deposits, recurring instalments, maturity dates and
            interest in one place.
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          <Plus size={16} /> New deposit
        </button>
      </div>
      <div className="panel table-panel fd-panel">
        <div className="fd-tabs">
          {["Fixed Deposit", "Recurring Deposit", "FD vs RD Comparison"].map(
            (t) => (
              <button
                key={t}
                className={tab === t ? "selected" : ""}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ),
          )}
        </div>
        {tab === "FD vs RD Comparison" ? (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Fixed Deposit (FD)</th>
                  <th>Recurring Deposit (RD)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Purpose", "Lump-sum deposit", "Regular monthly savings"],
                  ["Deposit mode", "One-time payment", "Periodic instalments"],
                  ["Tenure", "Fixed period", "Flexible predefined period"],
                  [
                    "Interest",
                    "Fixed rate for chosen tenure",
                    "Rate based on scheme and tenure",
                  ],
                  [
                    "Best suited for",
                    "Customers with a lump sum",
                    "Customers saving small amounts regularly",
                  ],
                  [
                    "Maturity benefit",
                    "Principal + accrued interest",
                    "Total instalments + accrued interest",
                  ],
                  [
                    "Tracking",
                    "Maturity date and payout",
                    "Monthly instalment and maturity tracking",
                  ],
                ].map((r) => (
                  <tr key={r[0]}>
                    <td>
                      <b>{r[0]}</b>
                    </td>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Table
            headers={[
              "Deposit ID",
              "Customer",
              "Deposit amount",
              "Tenure",
              "Interest rate",
              "Maturity date",
              "Status",
              "",
            ]}
            rows={visible.map((d) => [
              <span className="mono">{d.id}</span>,
              <b>{d.name}</b>,
              d.amount,
              d.tenure,
              d.rate,
              d.maturity,
              <Status value={d.status} />,
              <button
                className="icon-button tiny"
                onClick={() => onNotify(`${d.id} details preview opened.`)}
              >
                <Eye size={16} />
              </button>,
            ])}
          />
        )}
      </div>
      <div className="fd-process-grid">
        <div className="panel">
          <PanelTitle
            title="FD — Fixed Deposit process"
            subtitle="Safe savings with easy management"
          />
          <ProcessSteps
            steps={[
              "Application",
              "Validation",
              "Funding",
              "Active",
              "Maturity",
              "Payout / Renewal",
            ]}
          />
          <div className="process-note">
            Key details: principal amount, tenure, interest rate, maturity date
            and renewal preference.
          </div>
        </div>
        <div className="panel">
          <PanelTitle
            title="RD — Recurring Deposit process"
            subtitle="Build savings step by step"
          />
          <ProcessSteps
            steps={[
              "Setup",
              "Schedule",
              "Instalment collection",
              "Active",
              "Maturity",
              "Payout / Renewal",
            ]}
          />
          <div className="process-note">
            Key details: monthly instalment, due-date reminders, missed
            instalments and maturity value.
          </div>
        </div>
      </div>
      {showForm && (
        <Modal
          title="Create deposit"
          subtitle="Add a sample FD or RD account."
          onClose={() => setShowForm(false)}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = kind === "FD";
              const form = new FormData(e.currentTarget);
              const customer = form.get("customer");
              const amount = form.get("amount");
              const tenure = form.get("tenure");
              const rate = form.get("rate");
              setDeposits((prev) => [
                {
                  id: `${kind}-26${String(42 + prev.length).padStart(3, "0")}`,
                  name: customer,
                  type: fd ? "Fixed Deposit" : "Recurring Deposit",
                  amount: fd
                    ? `₹${Number(amount).toLocaleString("en-IN")}`
                    : `₹${Number(amount).toLocaleString("en-IN")} / month`,
                  tenure: `${tenure} months`,
                  rate: `${rate}%`,
                  maturity: "13 Oct 2027",
                  status: "Active",
                },
                ...prev,
              ]);
              setShowForm(false);
              setTab(fd ? "Fixed Deposit" : "Recurring Deposit");
              onNotify(`${fd ? "FD" : "RD"} account created in demo.`);
            }}
          >
            <label>
              Deposit type
              <select value={kind} onChange={(e) => setKind(e.target.value)}>
                <option value="FD">Fixed Deposit (FD)</option>
                <option value="RD">Recurring Deposit (RD)</option>
              </select>
            </label>
            <label>
              Customer
              <select name="customer">
                {customers.map((c) => (
                  <option key={c[0]}>{c[1]}</option>
                ))}
              </select>
            </label>
            <div className="form-grid">
              <label>
                {kind === "FD"
                  ? "Principal amount (₹)"
                  : "Monthly instalment (₹)"}
                <input
                  name="amount"
                  type="number"
                  min="100"
                  defaultValue={kind === "FD" ? 50000 : 2000}
                  required
                />
              </label>
              <label>
                Tenure
                <select name="tenure" defaultValue="12">
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                  <option value="18">18 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                </select>
              </label>
            </div>
            <label>
              Annual interest rate (%)
              <input
                name="rate"
                type="number"
                min="0"
                max="30"
                step=".1"
                defaultValue={kind === "FD" ? 7.5 : 6.5}
                required
              />
            </label>
            <div className="info-note">
              <CircleAlert size={17} />
              <span>
                Demo only. Connect backend rules to calculate actual maturity
                value and interest.
              </span>
            </div>
            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                <Plus size={16} /> Create deposit
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}
function ProcessSteps({ steps }) {
  return (
    <div className="process-steps">
      {steps.map((s, i) => (
        <div className="process-step" key={s}>
          <div className={`process-number process-${i % 5}`}>{i + 1}</div>
          <span>{s}</span>
          {i < steps.length - 1 && <i className="process-arrow">→</i>}
        </div>
      ))}
    </div>
  );
}
function FinancePage() {
  return (
    <>
      <div className="stats-grid compact-stats">
        <Stat
          label="Total assets"
          value="₹3.42 Cr"
          change="Across branch portfolio"
          icon={Landmark}
          color="blue"
          trend="up"
        />
        <Stat
          label="Total liabilities"
          value="₹48.6L"
          change="Current reporting period"
          icon={Wallet}
          color="orange"
          trend="neutral"
        />
        <Stat
          label="Cash & bank balance"
          value="₹12.8L"
          change="Consolidated balance"
          icon={CircleDollarSign}
          color="green"
          trend="neutral"
        />
        <Stat
          label="Outstanding loan book"
          value="₹2.84 Cr"
          change="Active customer loans"
          icon={HandCoins}
          color="purple"
          trend="up"
        />
      </div>
      <div className="panel table-panel">
        <PanelTitle
          title="Finance overview"
          subtitle="Sample financial position and movement"
        />
        <Table
          headers={[
            "Account / category",
            "Opening balance",
            "Credits",
            "Debits",
            "Closing balance",
          ]}
          rows={[
            ["Cash in hand", "₹1,25,000", "₹98,750", "₹84,200", "₹1,39,550"],
            [
              "Bank account",
              "₹8,42,000",
              "₹2,50,000",
              "₹1,20,000",
              "₹9,72,000",
            ],
            [
              "Loan principal outstanding",
              "₹2,78,00,000",
              "₹18,40,000",
              "₹12,50,000",
              "₹2,83,90,000",
            ],
            [
              "FD / RD deposits",
              "₹45,60,000",
              "₹3,20,000",
              "₹1,10,000",
              "₹47,70,000",
            ],
            [
              "Interest payable",
              "₹1,45,000",
              "₹42,000",
              "₹18,000",
              "₹1,69,000",
            ],
          ].map((r) => r.map((x, i) => (i === 0 ? <b>{x}</b> : x)))}
        />
      </div>
      <div className="bottom-note">
        <div className="note-icon">
          <CircleDollarSign size={17} />
        </div>
        <div>
          <b>Financial overview</b>
          <p>
            Track cash, bank balances, loan book, deposits and interest
            obligations. Values shown are illustrative sample data.
          </p>
        </div>
      </div>
    </>
  );
}
function ProfitLossPage() {
  return (
    <>
      <div className="stats-grid compact-stats">
        <Stat
          label="Total income"
          value="₹24.8L"
          change="This month"
          icon={ArrowUpRight}
          color="green"
          trend="up"
        />
        <Stat
          label="Total expenses"
          value="₹16.2L"
          change="This month"
          icon={ArrowDownRight}
          color="orange"
          trend="down"
        />
        <Stat
          label="Net profit"
          value="₹8.6L"
          change="34.7% margin"
          icon={ChartNoAxesCombined}
          color="blue"
          trend="up"
        />
        <Stat
          label="Operating costs"
          value="₹5.1L"
          change="Staff, branches & admin"
          icon={Wallet}
          color="purple"
          trend="neutral"
        />
      </div>
      <div className="report-grid">
        <div className="panel report-card">
          <PanelTitle
            title="Income & expenses"
            subtitle="Illustrative monthly trend"
          />
          <div className="report-big">
            ₹8,60,000 <span className="positive">Net profit</span>
          </div>
          <MiniChart />
        </div>
        <div className="panel report-card">
          <PanelTitle title="Profit composition" subtitle="Current month" />
          {[
            ["Interest income", 68, "blue"],
            ["Processing fees", 17, "green"],
            ["Other income", 15, "purple"],
          ].map((r) => (
            <div className="bar-row" key={r[0]}>
              <div>
                <span>{r[0]}</span>
                <b>{r[1]}%</b>
              </div>
              <div className="progress">
                <i className={r[2]} style={{ width: `${r[1]}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="panel table-panel">
        <PanelTitle
          title="Profit & loss statement"
          subtitle="Income and expense summary"
        />
        <Table
          headers={["Category", "Amount", "Type", "Period"]}
          rows={[
            ["Interest earned on loans", "₹18,40,000", "Income", "Oct 2026"],
            ["Processing and service fees", "₹4,20,000", "Income", "Oct 2026"],
            ["FD / RD interest earned", "₹1,30,000", "Income", "Oct 2026"],
            ["Staff and field operations", "₹8,10,000", "Expense", "Oct 2026"],
            ["Branch rent and utilities", "₹3,40,000", "Expense", "Oct 2026"],
            [
              "Technology and administration",
              "₹4,70,000",
              "Expense",
              "Oct 2026",
            ],
            ["Net operating profit", "₹7,70,000", "Summary", "Oct 2026"],
          ].map((r) => [
            <b>{r[0]}</b>,
            <b>{r[1]}</b>,
            <Status
              value={
                r[2] === "Income"
                  ? "Collected"
                  : r[2] === "Expense"
                    ? "Overdue"
                    : "Approved"
              }
            />,
            r[3],
          ])}
        />
      </div>
    </>
  );
}

function Reports() {
  return (
    <>
      <div className="stats-grid compact-stats">
        <Stat
          label="Total portfolio"
          value="₹2.84 Cr"
          change="Across active loans"
          icon={Landmark}
          color="blue"
          trend="up"
        />
        <Stat
          label="Collected this month"
          value="₹18.7L"
          change="+8.6% vs last month"
          icon={CircleDollarSign}
          color="green"
          trend="up"
        />
        <Stat
          label="Collection efficiency"
          value="91.2%"
          change="+2.1% vs last month"
          icon={ChartNoAxesCombined}
          color="purple"
          trend="up"
        />
        <Stat
          label="PAR 30"
          value="3.8%"
          change="Portfolio at risk"
          icon={CircleAlert}
          color="orange"
          trend="down"
        />
      </div>
      <div className="report-grid">
        <div className="panel report-card">
          <PanelTitle
            title="Collection performance"
            subtitle="Monthly collection vs target"
          />
          <div className="report-big">
            ₹18,70,500 <span className="positive">+8.6%</span>
          </div>
          <MiniChart />
        </div>
        <div className="panel report-card">
          <PanelTitle
            title="Portfolio breakdown"
            subtitle="Current loan status"
          />
          {[
            ["Active loans", 842, 78, "blue"],
            ["Pending approval", 18, 12, "purple"],
            ["Overdue", 42, 24, "orange"],
            ["Closed this month", 126, 50, "green"],
          ].map((r) => (
            <div className="bar-row" key={r[0]}>
              <div>
                <span>{r[0]}</span>
                <b>{r[1]}</b>
              </div>
              <div className="progress">
                <i className={r[3]} style={{ width: `${r[2]}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="panel table-panel">
        <PanelTitle
          title="Available reports"
          subtitle="Choose a report to preview or export"
        />
        <div className="report-links">
          {[
            [
              "Daily collection report",
              "Payment totals, pending dues and collector summary",
            ],
            [
              "Loan portfolio report",
              "Active loans, outstanding principal and status",
            ],
            [
              "Customer repayment report",
              "Customer-level EMI and repayment history",
            ],
            [
              "Overdue & ageing report",
              "Outstanding dues grouped by overdue duration",
            ],
          ].map((r, i) => (
            <div className="report-link" key={r[0]}>
              <div className="report-file">
                <FileText size={18} />
              </div>
              <div>
                <b>{r[0]}</b>
                <span>{r[1]}</span>
              </div>
              <button
                className="icon-button"
                onClick={() => alert(`${r[0]} preview is sample data.`)}
              >
                <Eye size={17} />
              </button>
              <button
                className="icon-button"
                onClick={() => alert(`${r[0]} export is a demo action.`)}
              >
                <Download size={17} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
function SettingsPage({ notify }) {
  const [settings, setSettings] = useState({
    reminders: true,
    overdue: true,
    approval: true,
    compact: false,
  });
  return (
    <>
      <div className="settings-grid">
        <div className="panel settings-panel">
          <PanelTitle
            title="Organization profile"
            subtitle="Your business identity and defaults"
          />
          <div className="org-profile">
            <div className="org-avatar large">SM</div>
            <div>
              <h3>SMLNEXGEN</h3>
              <p>Microfinance Management System</p>
              <span className="verified-tag">
                <BadgeCheck size={13} /> Organization verified
              </span>
            </div>
          </div>
          <div className="settings-fields">
            <label>
              Organization name
              <input defaultValue="SMLNEXGEN" />
            </label>
            <label>
              Default currency
              <select defaultValue="INR">
                <option value="INR">INR — Indian Rupee (₹)</option>
              </select>
            </label>
            <label>
              Timezone
              <select defaultValue="Asia/Kolkata">
                <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
              </select>
            </label>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => notify("Organization settings saved in this demo.")}
          >
            Save changes
          </button>
        </div>
        <div className="panel settings-panel">
          <PanelTitle
            title="Notifications & reminders"
            subtitle="Configure in-app reminder preferences"
          />
          {[
            [
              "reminders",
              "EMI due-date reminders",
              "Alert staff before upcoming instalments",
            ],
            [
              "overdue",
              "Overdue payment alerts",
              "Notify the team when payments are late",
            ],
            [
              "approval",
              "Approval notifications",
              "Notify admins about pending date-change requests",
            ],
            [
              "compact",
              "Compact table view",
              "Use a denser layout for data tables",
            ],
          ].map(([key, title, desc]) => (
            <div className="setting-toggle" key={key}>
              <div>
                <b>{title}</b>
                <span>{desc}</span>
              </div>
              <button
                className={`toggle ${settings[key] ? "on" : ""}`}
                onClick={() =>
                  setSettings({ ...settings, [key]: !settings[key] })
                }
                aria-label={`Toggle ${title}`}
              >
                <i />
              </button>
            </div>
          ))}
          <div className="info-note">
            <CircleAlert size={17} />
            <span>
              Actual SMS/email delivery requires backend integration and a
              messaging provider.
            </span>
          </div>
        </div>
        <div className="panel settings-panel">
          <PanelTitle title="Users & access" subtitle="Roles and permissions" />
          {[
            ["Karthi", "Branch Manager", "Full branch access"],
            ["Admin User", "Administrator", "Approvals and configuration"],
            [
              "Collection Team",
              "Field Officer",
              "Collections and customer lookup",
            ],
          ].map((u) => (
            <div className="user-access" key={u[0]}>
              <div className="avatar customer-avatar">
                {u[0]
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <b>{u[0]}</b>
                <span>{u[1]}</span>
              </div>
              <small>{u[2]}</small>
            </div>
          ))}
          <button
            className="btn btn-secondary"
            onClick={() => notify("User management is a demo screen.")}
          >
            Manage users <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </>
  );
}
function Status({ value }) {
  const cls =
    {
      Active: "green",
      Collected: "green",
      Approved: "green",
      Pending: "orange",
      Due: "orange",
      Overdue: "red",
      Rejected: "red",
      Review: "purple",
      "Pending approval": "purple",
      Returned: "blue",
    }[value] || "blue";
  return (
    <span className={`status ${cls}`}>
      <i />
      {value}
    </span>
  );
}
function Empty({ text }) {
  return (
    <div className="empty-state">
      <div>
        <Search size={20} />
      </div>
      <span>{text}</span>
    </div>
  );
}
function Modal({ title, subtitle, onClose, children }) {
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <div className="modal-head">
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <button className="icon-button" onClick={onClose}>
            <X size={19} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
