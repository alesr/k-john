package main

import (
  "fmt"
  "log"
  "net/http"
  "time"
  "os/exec"
)

func main() {

  // handle requests serving a file of the same name
  fs := http.Dir("web/")
  handler := http.FileServer(fs)
  http.Handle("/", handler)

  homeInit()
  log.Println("Start")

  // open.Start("http://localhost:8080/html/home.html")
  http.HandleFunc("/go", handlerGo)

  log.Print("Server running on port 8080")

  addr := fmt.Sprintf("127.0.0.1:8080")

  // from this block, the program runs forever
  err := http.ListenAndServe(addr, nil)
  fmt.Println(err.Error())
}

func handlerGo(w http.ResponseWriter, r *http.Request)  {
  log.Print("Go handler yells: It's alive!")

  //Chrome Killer
  killProcess("Google Chrome")  // Kills home.html
  gameInit()
}

// Inicialization comes here
// It opens the landpage  - it will be used only once per day.
func homeInit() {
  urlOnKiosk("http://localhost:8080/html/home.html")
}

// It opens the game trigged by a leap motion event.
func gameInit() {

  // Play time!
  cmd := exec.Command("osascript","web/scripts/open_fullscreen_game.scpt")
  err := cmd.Start()
  if err != nil {
    log.Println("Problem on launch the game:", err)
  } else {
    log.Println("Play time!")
  }

  // Start the timeout to move to next stage
  timeout := make(chan bool, 1)
  func() {
    time.Sleep(45 * time.Second)  // 90 seconds
    timeout <- true
  }()

killProcess("Midnight")
log.Println("Game Over")

// Trigger next stage (after game)
slideInit()
log.Println("Showtime!")
}

// Starts the second stage of the presentation
func slideInit() {
  urlOnKiosk("http://localhost:8080/html/showcase.html")
}

// In case of problem: check the browser's location
func urlOnKiosk(url string)  {
  cmd := exec.Command("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome","--kiosk", url)
  err := cmd.Start()
  if err != nil {
    log.Println("Problem on open the browser:", err)
  }
}

// The ultimate process killer
func killProcess(process string) {
  cmd := exec.Command("killall", process)
  err := cmd.Start()
  if err != nil {
    log.Println("Process finished with error:", err)
  } else {
    log.Println(process, "killed =o")
  }
}
