package pmn.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Question implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String content;
	private Boolean isActive;

	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private Quiz quiz;

	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name = "question_id")
	private List<Answer> answers;

}
