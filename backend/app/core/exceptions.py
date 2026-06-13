# core/exceptions.py

from typing import Optional


class AuthenticationException(Exception):
    def __init__(
        self,
        detail: str = "Authentication required"
    ):
        self.detail = detail
        super().__init__(detail)


class InvalidCredentialsException(Exception):
    def __init__(
        self,
        detail: str = "Invalid username or password"
    ):
        self.detail = detail
        super().__init__(detail)


class InvalidTokenException(Exception):
    def __init__(
        self,
        detail: str = "Invalid token"
    ):
        self.detail = detail
        super().__init__(detail)


class TokenExpiredException(Exception):
    def __init__(
        self,
        detail: str = "Token has expired"
    ):
        self.detail = detail
        super().__init__(detail)


class ForbiddenException(Exception):
    def __init__(
        self,
        detail: str = "Permission denied"
    ):
        self.detail = detail
        super().__init__(detail)


class AdminAccessRequiredException(Exception):
    def __init__(
        self,
        detail: str = "Admin access required"
    ):
        self.detail = detail
        super().__init__(detail)


class UserNotFoundException(Exception):
    def __init__(
        self,
        user_id: str = user_id
    ):
        self.user_id = user_id
        super().__init__(
            f"User {user_id} is not found"
        )


class AccountDisabledException(Exception):

    def __init__(
        self,
        detail: str = "your Account is disabled try to register"
    ):
        self.detail = detail
        super().__init__(detail)


class RoleNotAssignedException(Exception):
    def __init__(
        self,
        detail: str = "Role not assigned"
    ):
        self.detail = detail
        super().__init__(detail)


class PermissionDeniedException(Exception):
    def __init__(
        self,
        detail: str = "you are actual not allowed"
    ):
        self.detail = detail
        super().__init__(detail)