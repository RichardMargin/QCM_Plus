package pmn.models;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "lastName", "password" }) })
public class AppUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String lastName;
	private String firstName;
	private String company;
	private String password;
	private Role role;
	private Boolean isActive;

	@OneToMany
	@JoinColumn(name = "appUser_id")
	private List<UserAnswer> userAnswers;

	@OneToMany
	@JoinColumn(name = "appUser_id")
	private List<Result> results;
}
