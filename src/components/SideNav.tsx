import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	Box,
	Tooltip,
	Divider,
	ListItemButton,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import { useAuth } from "../context/AuthContext";

export default function SideNav() {
	const navigate = useNavigate();
	const location = useLocation();
	const { logout, role } = useAuth();

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	const menuItems = [
		{ label: "Dashboard", icon: <DashboardIcon />, path: `/${role}/dashboard` },
		{ label: "Mentors", icon: <PeopleIcon />, path: "/mentors" },
		{ label: "Messages", icon: <MessageIcon />, path: "/messages" },
		{ label: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
		{ label: "Buy Credits", icon: <CreditCardIcon />, path: "/buy-credits" },
		{ label: "Articles", icon: <ArticleIcon />, path: "/articles" },
	];

	return (
		<Drawer
			variant="permanent"
			sx={{
				width: 80,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: 80,
					boxSizing: "border-box",
					backgroundColor: "#1A2027",
					color: "#fff",
				},
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					height: "100%",
					justifyContent: "space-between",
					py: 2,
				}}
			>
				{/* Top logo */}
				<List>
					<ListItem disablePadding sx={{ justifyContent: "center" }}>
						<SchoolIcon sx={{ color: "#fff", fontSize: 32 }} />
					</ListItem>
				</List>

				{/* Middle navigation icons */}
				<List>
					{menuItems.map((item) => {
						const isActive = location.pathname.startsWith(item.path);
						return (
							<Tooltip title={item.label} placement="right" key={item.label}>
								<ListItemButton
									onClick={() => navigate(item.path)}
									sx={{
										justifyContent: "center",
										bgcolor: isActive ? "primary.main" : "transparent",
										"&:hover": {
											bgcolor: "primary.light",
										},
									}}
								>
									<ListItemIcon
										sx={{
											color: isActive ? "white" : "#fff",
											minWidth: "auto",
										}}
									>
										{item.icon}
									</ListItemIcon>
								</ListItemButton>
							</Tooltip>
						);
					})}
				</List>

				<Divider sx={{ bgcolor: "grey.700", my: 1 }} />

				{/* Bottom logout */}
				<List>
					<Tooltip title="Logout" placement="right">
						<ListItemButton
							onClick={handleLogout}
							sx={{ justifyContent: "center" }}
						>
							<ListItemIcon sx={{ color: "#fff", minWidth: "auto" }}>
								<LogoutIcon />
							</ListItemIcon>
						</ListItemButton>
					</Tooltip>
				</List>
			</Box>
		</Drawer>
	);
}
