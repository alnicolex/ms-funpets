package com.funpets.account_ms.controllers;

import com.funpets.account_ms.exceptions.AccountNotFoundException;
import com.funpets.account_ms.models.Account;
import com.funpets.account_ms.repositories.AccountRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {
    private final AccountRepository accountRepository;

    public AccountController(AccountRepository accountRepository){
        this.accountRepository = accountRepository;
    }

    @PostMapping("/accounts")
    Account newAccount (@RequestBody Account account){
        return accountRepository.save(account);
    }

    @GetMapping("/accounts/{nickname}")
    Account getAccount(@PathVariable String nickname){
        return accountRepository.findById(nickname).orElseThrow(() -> new AccountNotFoundException("No se encontro una cuenta con el nickname: " + nickname));
    }

    @GetMapping("/accountuser/{username}")
    List<Account> userAccount (@PathVariable String username){
        List<Account> userAccount = accountRepository.findByUsername(username);
        return userAccount;
    }
}
