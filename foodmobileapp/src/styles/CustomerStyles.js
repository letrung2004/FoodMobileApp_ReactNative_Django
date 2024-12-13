import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  margin: {
    margin: 5,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    height: 80,
    paddingBottom: 20,
    paddingTop: 5,
  },
  tabBarIcon: {
    width: 35,
    height: 35,
  },
  tabBarLabel: {
    fontSize: 13,
    paddingBottom: 5,
  },
  container_home_header: {
    backgroundColor: '#EE4D2D', // Shopee orange color
    padding: 12,
    paddingTop: 50
  },
  container_account_header: {
    backgroundColor: '#EE4D2D', // Shopee orange color
    padding: 50,

  },
  addressContainer: {
    marginBottom: 8,

  },
  deliverText: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 4,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addressText: {
    color: '#fff',
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 12,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
  },
  safeArea: {
    // backgroundColor: '#EE4D2D',
  },
  
  menuContainer: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "white",
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: "#FF5722",
    margin: 5,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  mainCategory: {
    width: 60,
    height: 60,
    backgroundColor: "gray", //#f1f1f1 mau nay ne
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
  },
  scrollMainCategories: {
    backgroundColor: 'blue',
    paddingBottom: 0,
    height: 1,
    marginBottom: 0
  }
});