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
public class Quiz {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String description;
	private Boolean isShared;
	private Boolean isActive;

	@OneToMany
	@JoinColumn(name = "quiz_id")
	private List<Question> questions;

	@OneToMany
	@JoinColumn(name = "quiz_id")
	private List<Result> results;

}
