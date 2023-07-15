// package middleware

// import (
// 	dto "LandTicket-Backend/dto/result"
// 	jwtToken "LandTicket-Backend/pkg/jwt"
// 	"fmt"
// 	"net/http"
// 	"strings"

// 	"github.com/labstack/echo/v4"
// )

// type Result struct {
// 	Code    int         `json:"code"`
// 	Data    interface{} `json:"data"`
// 	Message string      `json:"message"`
// }

// func Auth(next echo.HandlerFunc) echo.HandlerFunc {
// 	return func(c echo.Context) error {
// 		token := c.Request().Header.Get("Authorization")
// 		fmt.Println(token)

// 		if token == "" {
// 			return c.JSON(http.StatusUnauthorized, dto.ErrorResult{Code: http.StatusBadRequest, Message: "unauthorized"})
// 		}

// 		token = strings.Split(token, " ")[1]
// 		claims, err := jwtToken.DecodeToken(token)

// 		if err != nil {
// 			return c.JSON(http.StatusUnauthorized, Result{Code: http.StatusUnauthorized, Message: "unauthorized"})
// 		}

// 		c.Set("userLogin", claims)
// 		return next(c)
// 	}
// }

package middleware

import (
	dto "LandTicket-Backend/dto/result"
	jwtToken "LandTicket-Backend/pkg/jwt"
	"fmt"
	"net/http"
	"strings"

	"github.com/labstack/echo/v4"
)

// Declare Result struct here ...
type Result struct {
	Code    int         `json:"code"`
	Data    interface{} `json:"data"`
	Message string      `json:"message"`
}

// Create Auth function here ...
func Auth(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		token := c.Request().Header.Get("Authorization")
		// fmt.Println(token)

		if token == "" {
			return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: "unauthorized xxxx"})
		}

		tokens := strings.Split(token, " ")[1]
		fmt.Println(tokens)
		claims, err := jwtToken.DecodeToken(tokens)

		if err != nil {
			return c.JSON(http.StatusUnauthorized, Result{Code: http.StatusUnauthorized, Message: "unathorized porn"})
		}

		c.Set("userLogin", claims)
		return next(c)
	}
}
