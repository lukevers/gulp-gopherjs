package main

import (
	"github.com/gopherjs/gopherjs/js"
)

func main() {
	js.Global.Set("pet", map[string]interface{}{
		"New": New,
	})
}

func New(name string) *js.Object {
	return js.MakeWrapper(&Pet{name})
}
