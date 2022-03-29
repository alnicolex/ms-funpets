package com.funpets.account_ms.repositories;

import com.funpets.account_ms.models.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface AccountRepository extends MongoRepository <Account, String> {
    List<Account> findByUsername (String username);
}
