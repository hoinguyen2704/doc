package vn.hoidanit.laptopshop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vn.hoidanit.laptopshop.service.UserService;

@Controller
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/")
    public String getHomePage(Model model) {
        return "index";
    }
    @RequestMapping("/home")
    public String getIndexPage(Model model) {
        String test = this.userService.handleHello();
        model.addAttribute("hoinguyen", test);
        model.addAttribute("name", "Nguyễn Tiến Hội");
        return "index";
    }

    @RequestMapping("/sign")
    public String getSign() {
        return "sign_in";
    }
    @RequestMapping("/about")
    public String getAbout() {
        return "about";
    }

    @RequestMapping("/dashboard")
    public String getDashBoard() {
        return "dashboard";
    }
    @RequestMapping("/ticket-booking")
    public String getTicket_Booking() {
        return "ticket-booking";
    }
    @RequestMapping("/movies")
    public String getMovies() {
        return "movies";
    }
    @RequestMapping("/e-ticket")
    public String getE_Ticket() {
        return "e-ticket";
    }
    @RequestMapping("/Contact_Us")
    public String getContact_Us() {
        return "Contact_Us";
    }
    @RequestMapping("/seat_sel")
    public String getSeat_Sel() {
        return "seat_sel";
    }
}
// @RestController
// public class UserController {
// private final UserService userService;

// public UserController(UserService userService) {
// this.userService = userService;
// }

// @GetMapping("/home")
// public String getHomePage() {
// return this.userService.handleHello();
// }
// }
